import Select from 'react-select'

export default function DropDown ({ options, name, changeHandler }) {
  return (
    <div className='w-11/12 mx-auto rounded-lg'>
      <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name={name} onChange={changeHandler} />
    </div>
  )
}