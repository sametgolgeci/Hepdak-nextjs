function Error({ statusCode }) {
  return (
    <p>
			<div className="dortyuzdort">
				<h1>{statusCode}</h1>
				<a href="/">Ana Sayfa</a>
			</div>
		</p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error