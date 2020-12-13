import Select from 'react-select'

export default function DropDown ({ theme, options, name, changeHandler }) {
  return (
    <div className={`mt-3 md:mt-6 px-0 md:px-4 md:w-11/12 mx-auto rounded-lg mb-2 md:mb-5`}>
      <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name={name} onChange={changeHandler} />
    </div>
  )
}