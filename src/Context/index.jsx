import React, { useEffect } from "react";
import { useLocalState } from "../utils/hooks";
import { useMutation } from "react-query";
import AuthContextWrapper from "./AuthContext";

export default function GlobalContext({ children }) {
  return <AuthContextWrapper>{children}</AuthContextWrapper>;
}
