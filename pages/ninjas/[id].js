export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  return {
    paths: data.map(ninja => ({
      params: { id: ninja.id.toString() }
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  console.log(context)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const data = await res.json()
  return {
    props: { ninja: data }
  }
}

const Detail = ({ninja}) => {
  return (
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  );
}
 
export default Detail;