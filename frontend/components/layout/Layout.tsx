import { useRouter } from "next/router";
import { Container, Stack } from "react-bootstrap";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }: any) => {
	const router = useRouter();

	if ((router.pathname === "/calendar")) {
		return (
			<>
				<MainNavigation />
				<Container>
					<Stack className="mx-auto mt-5">{children}</Stack>
				</Container>
			</>
		);
	} else {
		return (
			<>
				<MainNavigation />
				<Container>
					<Stack className="col-md-8 col-xl-6 mx-auto mt-5">{children}</Stack>
				</Container>
			</>
		);
	}
};

export default Layout;
