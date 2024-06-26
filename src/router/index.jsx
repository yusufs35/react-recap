import { createBrowserRouter } from "react-router-dom";
import Recap1Page from "../pages/recap1-page";
import Recap2Page from "../pages/recap2-page";
import Homepage from "../pages/home-page";
import Recap3Page from "../pages/recap3-page";
import Recap4Page from "../pages/recap4-page";
import Recap5Page from "../pages/recap5-page";
import Recap6Page from "../pages/recap6-page";
import Recap7Page from "../pages/recap7-page";
import RootLayout from "../layouts/root-layout";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "page1",
				element: <Recap1Page />,
			},
			{
				path: "page2",
				element: <Recap2Page />,
			},
			{
				path: "page3",
				element: <Recap3Page />,
			},
			{
				path: "page4",
				element: <Recap4Page />,
			},
			{
				path: "page5",
				element: <Recap5Page />,
			},
			{
				path: "page6",
				element: <Recap6Page />,
			},
			{
				path: "page7",
				element: <Recap7Page />,
			},
		],
	},
]);
