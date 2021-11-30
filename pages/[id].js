export async function getStaticPaths() {
  return { paths: [{ params: { id: "myid" } }], fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } }
}

export default function StaticPaths(props) {
  return <p>{props.id}</p>
}
