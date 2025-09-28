const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({content}) => {
  return (
    <div>
       <p>
        {content[0].name} {content[0].exercises}
      </p>
      <p>
        {content[1].name} {content[1].exercises}
      </p>
      <p>
        {content[2].name} {content[2].exercises}
      </p>
    </div>
  )
}

const Total = ({content}) => {
  return (
    <div>
      <p>Number of exercises {content[0].exercises + content[1].exercises + content[2].exercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    content: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    }

  return (
    <div>
      <Header name={course.name} />
      <Content content={course.content} />
      <Total content={course.content} />
    </div>
  )
}

export default App