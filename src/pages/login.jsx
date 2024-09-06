import {
  Button,
  Input,
  Typography
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostLoginMutation } from "../api/auth/login";
import { useAuthStore } from "../state/authState";
import {useNavigate} from "react-router-dom";


export function Login() {
  const authStore = useAuthStore((state) => state.auth);
  const loginAuthStore = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const postLogin = PostLoginMutation();

  const handleLogin = (data) => {
    postLogin.mutate({
      username: data.username,
      password: data.password
    }, {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        loginAuthStore(data);
        //set refresh tokennya belum

        navigate("/admin/post-events");
      }
    });
  }
  useEffect(() => {
    console.log(authStore);


    return () => {

    }
  }, [authStore])

  return (
    <div className="w-full flex flex-col h-screen items-center justify-center">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your username and password to Sign In.</Typography>
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Your Username
          </Typography>
          <Input
            {...register("username")}
            size="lg"
            placeholder="john.doe"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Password
          </Typography>
          <Input
            {...register("password")}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Sign In
        </Button>
      </form>

    </div>
  );
}


