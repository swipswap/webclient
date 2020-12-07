export default function ToggleMode({ theme, setTheme }) {
  // const translation = `transition duration-1000 ease-in-out transform ${mode ? "" : "translate-x-full"}`
  // const translation = `transition-transform`
  return theme.currentTheme === "lightTheme" ? (
    <svg className='transition duration-1000 ease-in h-6 pl-4 md:h-5 pt-1 hidden md:inline-block' onClick={setTheme} viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.625 2.23693C22.6141 2.23693 24.5218 3.00216 25.9283 4.36426C27.3348 5.72637 28.125 7.57378 28.125 9.50009C28.125 11.4264 27.3348 13.2738 25.9283 14.6359C24.5218 15.998 22.6141 16.7632 20.625 16.7632H15C16.1652 15.9184 17.1109 14.8219 17.7618 13.5611C18.4128 12.3002 18.7512 10.9098 18.75 9.50009C18.7512 8.09043 18.4128 6.69993 17.7618 5.43909C17.1109 4.17825 16.1652 3.08182 15 2.23693H20.625ZM9.375 16.7632C7.38588 16.7632 5.47822 15.998 4.0717 14.6359C2.66518 13.2738 1.875 11.4264 1.875 9.50009C1.875 7.57378 2.66518 5.72637 4.0717 4.36426C5.47822 3.00216 7.38588 2.23693 9.375 2.23693C11.3641 2.23693 13.2718 3.00216 14.6783 4.36426C16.0848 5.72637 16.875 7.57378 16.875 9.50009C16.875 11.4264 16.0848 13.2738 14.6783 14.6359C13.2718 15.998 11.3641 16.7632 9.375 16.7632ZM0 9.50009C0 11.908 0.98772 14.2172 2.74587 15.9199C4.50403 17.6225 6.8886 18.579 9.375 18.579H20.625C23.1114 18.579 25.496 17.6225 27.2541 15.9199C29.0123 14.2172 30 11.908 30 9.50009C30 7.0922 29.0123 4.78294 27.2541 3.0803C25.496 1.37767 23.1114 0.421143 20.625 0.421143H9.375C6.8886 0.421143 4.50403 1.37767 2.74587 3.0803C0.98772 4.78294 0 7.0922 0 9.50009H0Z" fill="#63277D"/>
    </svg>
  ) : (
    <svg className='transition duration-500 ease-in-out h-6 md:h-4 pt-1 hidden md:inline-block' onClick={setTheme} viewBox="0 0 30 21" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0.375H10C4.47917 0.375 0 4.91016 0 10.5C0 16.0898 4.47917 20.625 10 20.625H20C25.5208 20.625 30 16.0898 30 10.5C30 4.91016 25.5208 0.375 20 0.375ZM20 17.25C16.3125 17.25 13.3333 14.2283 13.3333 10.5C13.3333 6.76641 16.3177 3.75 20 3.75C23.6875 3.75 26.6667 6.77168 26.6667 10.5C26.6667 14.2336 23.6823 17.25 20 17.25Z" fill="#fff"/>
    </svg>
  )
}

