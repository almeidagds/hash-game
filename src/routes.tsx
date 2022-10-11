import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Board } from "./components/Board";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route path="/" element={<Board />}>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</main>
	);
}