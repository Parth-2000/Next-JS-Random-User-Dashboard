import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="robots" content="follow, index" />
					<meta
						name="description"
						content="This is a Random User Dashboard. Created using NEXTJS. Having dynamic routing."
					/>
					<meta
						property="og:site_name"
						content="Random User Dashboard (Next.js)"
					/>
					<meta
						property="og:description"
						content="This is a Random User Dashboard. Created using NEXTJS. Having dynamic routing."
					/>
					<meta property="og:title" content="Random User Dashboard (Next.js)" />
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
						crossOrigin="anonymous"
					/>
					<title>Random User Dashboard (Next.js)</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
						crossOrigin="anonymous"></script>
				</body>
				<NextScript />
			</Html>
		);
	}
}
