
const TestLayout = ({
    children
} : {
    children : React.ReactNode
}) => {
  return (
    <div>
      <nav className="flex justify-around items-center">
        <ul>elemetn1</ul>
        <ul>elemetn2</ul>
        <ul>element3</ul>
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}

export default TestLayout;
