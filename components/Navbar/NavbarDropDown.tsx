export default function NavDropDownMenu() {
  return (
     <div className={`absolute group top-0 mt-10 md:mt-12 right-0 rounded-2xl px-6 p-3 bg-white z-20`}>
       <div className='flex'>
         <div className='pl-2 mt-2'>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3 9.1H7.7V10.5H6.3V9.1ZM6.3 3.5H7.7V7.7H6.3V3.5ZM6.993 0C3.129 0 0 3.136 0 7C0 10.864 3.129 14 6.993 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 6.993 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 3.906 3.906 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 10.094 10.094 12.6 7 12.6Z" fill="#6E298C"/>
          </svg>

         </div>

        <p className='mt-1'>About</p>
       </div>
       <div className='flex'>
        <div className='pl-2 mt-2'>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.125 8.12502V13.125H13.125V8.12502H8.125ZM1.875 13.125H6.875V8.12502H1.875V13.125ZM1.875 1.87502V6.87502H6.875V1.87502H1.875ZM10.4125 1.05627L6.875 4.58752L10.4125 8.12502L13.95 4.58752L10.4125 1.05627Z" fill="#6E298C"/>
        </svg>
        </div>
          <p className='mt-1'>Docs</p>
       </div>
       
       <div className='flex'>
        <div className='pl-2 mt-2'>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 10C11.6469 10.0017 11.301 10.1003 11 10.285L9.455 8.735C9.8145 8.22789 10.0076 7.62162 10.0076 7C10.0076 6.37838 9.8145 5.77212 9.455 5.265L11 3.715C11.301 3.8997 11.6469 3.99828 12 4C12.3956 4 12.7822 3.8827 13.1111 3.66294C13.44 3.44318 13.6964 3.13082 13.8478 2.76537C13.9991 2.39992 14.0387 1.99778 13.9616 1.60982C13.8844 1.22186 13.6939 0.865492 13.4142 0.585787C13.1345 0.306082 12.7781 0.115601 12.3902 0.0384303C12.0022 -0.0387401 11.6001 0.000866562 11.2346 0.152242C10.8692 0.303617 10.5568 0.559962 10.3371 0.88886C10.1173 1.21776 10 1.60444 10 2C10.0017 2.35313 10.1003 2.69902 10.285 3L8.735 4.545C8.22789 4.1855 7.62162 3.9924 7 3.9924C6.37838 3.9924 5.77212 4.1855 5.265 4.545L3.715 3C3.8997 2.69902 3.99828 2.35313 4 2C4 1.60444 3.8827 1.21776 3.66294 0.88886C3.44318 0.559962 3.13082 0.303617 2.76537 0.152242C2.39992 0.000866562 1.99778 -0.0387401 1.60982 0.0384303C1.22186 0.115601 0.865492 0.306082 0.585787 0.585787C0.306082 0.865492 0.115601 1.22186 0.0384303 1.60982C-0.0387401 1.99778 0.000866562 2.39992 0.152242 2.76537C0.303617 3.13082 0.559962 3.44318 0.88886 3.66294C1.21776 3.8827 1.60444 4 2 4C2.35313 3.99828 2.69902 3.8997 3 3.715L4.545 5.265C4.1855 5.77212 3.9924 6.37838 3.9924 7C3.9924 7.62162 4.1855 8.22789 4.545 8.735L3 10.285C2.69902 10.1003 2.35313 10.0017 2 10C1.60444 10 1.21776 10.1173 0.88886 10.3371C0.559962 10.5568 0.303617 10.8692 0.152242 11.2346C0.000866562 11.6001 -0.0387401 12.0022 0.0384303 12.3902C0.115601 12.7781 0.306082 13.1345 0.585787 13.4142C0.865492 13.6939 1.22186 13.8844 1.60982 13.9616C1.99778 14.0387 2.39992 13.9991 2.76537 13.8478C3.13082 13.6964 3.44318 13.44 3.66294 13.1111C3.8827 12.7822 4 12.3956 4 12C3.99828 11.6469 3.8997 11.301 3.715 11L5.265 9.455C5.77212 9.8145 6.37838 10.0076 7 10.0076C7.62162 10.0076 8.22789 9.8145 8.735 9.455L10.285 11C10.1003 11.301 10.0017 11.6469 10 12C10 12.3956 10.1173 12.7822 10.3371 13.1111C10.5568 13.44 10.8692 13.6964 11.2346 13.8478C11.6001 13.9991 12.0022 14.0387 12.3902 13.9616C12.7781 13.8844 13.1345 13.6939 13.4142 13.4142C13.6939 13.1345 13.8844 12.7781 13.9616 12.3902C14.0387 12.0022 13.9991 11.6001 13.8478 11.2346C13.6964 10.8692 13.44 10.5568 13.1111 10.3371C12.7822 10.1173 12.3956 10 12 10ZM12 1C12.1978 1 12.3911 1.05865 12.5556 1.16853C12.72 1.27841 12.8482 1.43459 12.9239 1.61732C12.9996 1.80004 13.0194 2.00111 12.9808 2.19509C12.9422 2.38907 12.847 2.56726 12.7071 2.70711C12.5673 2.84696 12.3891 2.9422 12.1951 2.98079C12.0011 3.01937 11.8 2.99957 11.6173 2.92388C11.4346 2.84819 11.2784 2.72002 11.1685 2.55557C11.0587 2.39112 11 2.19778 11 2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1ZM1 2C1 1.80222 1.05865 1.60888 1.16853 1.44443C1.27841 1.27998 1.43459 1.15181 1.61732 1.07612C1.80004 1.00043 2.00111 0.98063 2.19509 1.01922C2.38907 1.0578 2.56726 1.15304 2.70711 1.29289C2.84696 1.43275 2.9422 1.61093 2.98079 1.80491C3.01937 1.99889 2.99957 2.19996 2.92388 2.38268C2.84819 2.56541 2.72002 2.72159 2.55557 2.83147C2.39112 2.94135 2.19778 3 2 3C1.73478 3 1.48043 2.89464 1.29289 2.70711C1.10536 2.51957 1 2.26522 1 2ZM2 13C1.80222 13 1.60888 12.9414 1.44443 12.8315C1.27998 12.7216 1.15181 12.5654 1.07612 12.3827C1.00043 12.2 0.98063 11.9989 1.01922 11.8049C1.0578 11.6109 1.15304 11.4327 1.29289 11.2929C1.43275 11.153 1.61093 11.0578 1.80491 11.0192C1.99889 10.9806 2.19996 11.0004 2.38268 11.0761C2.56541 11.1518 2.72159 11.28 2.83147 11.4444C2.94135 11.6089 3 11.8022 3 12C3 12.2652 2.89464 12.5196 2.70711 12.7071C2.51957 12.8946 2.26522 13 2 13ZM7 9C6.60444 9 6.21776 8.8827 5.88886 8.66294C5.55996 8.44318 5.30362 8.13082 5.15224 7.76537C5.00087 7.39992 4.96126 6.99778 5.03843 6.60982C5.1156 6.22186 5.30608 5.86549 5.58579 5.58579C5.86549 5.30608 6.22186 5.1156 6.60982 5.03843C6.99778 4.96126 7.39992 5.00087 7.76537 5.15224C8.13082 5.30362 8.44318 5.55996 8.66294 5.88886C8.8827 6.21776 9 6.60444 9 7C9 7.53043 8.78929 8.03914 8.41421 8.41421C8.03914 8.78929 7.53043 9 7 9ZM12 13C11.8022 13 11.6089 12.9414 11.4444 12.8315C11.28 12.7216 11.1518 12.5654 11.0761 12.3827C11.0004 12.2 10.9806 11.9989 11.0192 11.8049C11.0578 11.6109 11.153 11.4327 11.2929 11.2929C11.4327 11.153 11.6109 11.0578 11.8049 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5654 11.1518 12.7216 11.28 12.8315 11.4444C12.9414 11.6089 13 11.8022 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13Z" fill="#63277D"/>
        </svg>
        </div>
          <p className='mt-1'>API</p>
       </div>

      </div>
  )
}