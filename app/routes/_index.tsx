import type { MetaFunction } from "@remix-run/node";
import MyData from "./MyHomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Lab1 by Niti" },
    { name: "description", content: "Lab1 by Niti Pakjamsai" },
  ];
};

export default function Index() {
  return (
    <MyData />
  );
}
