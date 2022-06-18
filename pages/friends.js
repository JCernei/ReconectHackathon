export default function Hello({ test }){
    return(
        <h1>Hello world, {test} </h1>
    )
}

export async function getServerSideProps(context) {

    return {
      props: {
        test: `asd`
      }, // will be passed to the page component as props
    }
  }
  