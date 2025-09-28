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
      <Part part={content[0]}/>
      <Part part={content[1]}/>
      <Part part={content[2]}/>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
        {part.name} {part.exercises}
    </p>
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