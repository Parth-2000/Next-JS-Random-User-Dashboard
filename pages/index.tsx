import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Home({ data }) {
	const handleClick = (e, email: string, info) => {
		e.preventDefault();
		Router.push({
			pathname: "/" + email,
			query: { data: JSON.stringify(info) },
		});
	};
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Random User Dashboard
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="row">
					{data &&
						data.map((d, i) => {
							let info = {
								cell: d.cell,
								dob: d.dob.date,
								email: d.email,
								city: d.location.city,
								country: d.location.country,
								state: d.location.state,
								name: d.name.title + " " + d.name.first + " " + d.name.last,
								picture: d.picture.large,
								username: d.login.username,
							};
							return (
								<div className="col-sm shadow p-3 mb-5 bg-white rounded">
									<Link
										href={{
											pathname: "/" + d.email,
											query: { data: JSON.stringify(info) },
										}}>
										<a
											onClick={e => handleClick(e, d.email, info)}
											style={{ textDecoration: "none", color: "black" }}>
											<div className="card" style={{ minWidth: "18rem" }}>
												<img
													src={d.picture.large}
													className="card-img-top"
													alt={
														d.name.title +
														" " +
														d.name.first +
														" " +
														d.name.last
													}
													style={{
														width: "250px",
														height: "300px",
														margin: "auto",
													}}></img>
												<div
													className="card-body"
													style={{
														display: "flex",
														flexDirection: "column",
														justifyContent: "center",
														alignItems: "center",
													}}>
													<h5 className="card-title">
														{d.name.title +
															" " +
															d.name.first +
															" " +
															d.name.last}
													</h5>
													<p className="card-text">{d.email}</p>
												</div>
											</div>
										</a>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://randomuser.me/api/?results=100");
	let data = await res.json();
	data = data.results;
	return {
		props: {
			data,
		},
	};
}
