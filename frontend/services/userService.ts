import serverAPI from "./serverAPI";

const userService = {
	getTokenFromLocalStorage() {
		let stringToken;
		if (typeof window !== "undefined") {
			return stringToken = localStorage.getItem("token");
		}

		if (stringToken) {
			return JSON.parse(stringToken);
		}

		return {};
	},

	async login(userData: { email: string; password: string }) {
		const data = await serverAPI.post({
			url: "auth/login",
			data: userData,
		});

		localStorage.setItem("token", JSON.stringify(data));
		return data;
	},

	async register(userData: {}) {
		const data = await serverAPI.post({
			url: "auth/register",
			data: userData,
		});

		return data;
	},

	logout() {
		localStorage.removeItem("token");
	},
};

export default userService;
