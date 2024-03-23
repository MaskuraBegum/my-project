import { LineChart as Linec, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const linechart = [
        {
          "student_id": 1,
          "name": "Alice",
          "maths": 85,
          "science": 75,
          "english": 90
        },
        {
          "student_id": 2,
          "name": "Bob",
          "maths": 78,
          "science": 82,
          "english": 85
        },
        {
          "student_id": 3,
          "name": "Charlie",
          "maths": 92,
          "science": 88,
          "english": 80
        },
        {
          "student_id": 4,
          "name": "David",
          "maths": 70,
          "science": 65,
          "english": 72
        },
        {
          "student_id": 5,
          "name": "Eve",
          "maths": 68,
          "science": 75,
          "english": 78
        },
        {
          "student_id": 6,
          "name": "Frank",
          "maths": 82,
          "science": 90,
          "english": 88
        },
        {
          "student_id": 7,
          "name": "Grace",
          "maths": 88,
          "science": 85,
          "english": 92
        },
        {
          "student_id": 8,
          "name": "Harry",
          "maths": 75,
          "science": 78,
          "english": 80
        },
        {
          "student_id": 9,
          "name": "Isabel",
          "maths": 85,
          "science": 92,
          "english": 90
        },
        {
          "student_id": 10,
          "name": "Jack",
          "maths": 72,
          "science": 68,
          "english": 75
        }
      ]
      
    return (
        <div className='px-32 border-2'>
            <Linec width={800} height={400} data={linechart}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="maths" stroke="#8884d8" />
                <Line type='monotone' dataKey='science' stroke='yellow'></Line>
            </Linec>
        </div>
    );
};

export default LineChart;