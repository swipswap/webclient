export default function RenderFormFields(formFields, state, setState){
    return formFields(state, setState).map(field => {
        const Component = field.type === 'select'
        ? (<select key={field.name} name={field.name} {...field}>
                {field.options.map(opt => (<option key={opt.text} value={opt.value}>{opt.text}</option>))}
            </select>)
        :(<input className="border outline-none w-full" key={field.name} {...field} />)
        return Component
    })
}