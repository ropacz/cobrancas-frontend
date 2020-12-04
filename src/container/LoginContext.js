import React from "react";
import { createContainer } from "unstated-next";
import useLogin from "../hooks/useLogin";

export const ContextoDoToken = React.createContext();
export const LoginContainer = createContainer(useLogin);
