import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function UserInfo() {
	const router = useRouter();

	let data: any = JSON.parse(router.query.data ? router.query.data : "{}");

	const handleClick = e => {
		e.preventDefault();

		Router.push({
			pathname: "/",
		});
	};

	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<Link
						href={{
							pathname: "/",
						}}>
						<a onClick={e => handleClick(e)} className="navbar-brand">
							Random User Dashboard
						</a>
					</Link>
				</div>
			</nav>
			{data ? (
				<div className="card text-center m-auto mt-5 shadow-lg p-3 mb-5 bg-white rounded">
					<div className="card-header shadow-sm p-3  bg-white rounded">
						<h3>{data.name}</h3>
						<p>{data.cell}</p>
					</div>
					<div className="card-body">
						<img
							src={data.picture}
							className="card-img-top"
							alt={data.name}
							style={{
								width: "200px",
								height: "250px",
								margin: "auto",
							}}></img>
						<h5 className="card-title">{data.email}</h5>
						<p className="card-text">
							<b>Username: </b>
							{data.username}
						</p>
						<p className="card-text">
							<b>DOB: </b>
							{new Date(data.dob).toDateString()}
						</p>
						<p className="card-text">
							<b>City: </b>
							{data.city}
						</p>
						<p className="card-text">
							<b>State: </b>
							{data.state}
						</p>
						<p className="card-text">
							<b>Country: </b>
							{data.country}
						</p>
						<Link
							href={{
								pathname: "/",
							}}>
							<a onClick={e => handleClick(e)} className="btn btn-primary">
								Go Back
							</a>
						</Link>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
