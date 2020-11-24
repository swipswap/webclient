import { Fragment } from 'react'
export default function SocialLinks({ theme }) {

  return (
    <div className='flex w-32 py-3 justify-between mx-auto'>
      { theme ? ( 
        <>
          <span>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5283 2.35989L17.962 0.943184V0.632904H12.9967L9.45813 9.73445L5.43304 0.632904H0.226864V0.943184L1.90145 3.02615C2.06517 3.18009 2.14936 3.40618 2.12831 3.63228V11.8174C2.17977 12.1133 2.08855 12.4139 1.88742 12.628L0 14.9924V15.2978H5.34651V14.9876L3.46143 12.6304C3.36043 12.5249 3.28446 12.3969 3.23943 12.2563C3.1944 12.1157 3.18153 11.9664 3.20182 11.8198V4.7387L7.89581 15.3026H8.44075L12.4775 4.7387V13.1547C12.4775 13.376 12.4775 13.4217 12.3372 13.5684L10.8848 15.0188V15.3291H17.9293V15.0188L16.5283 13.6021C16.4067 13.5059 16.3436 13.3448 16.3693 13.1884V2.77359C16.3572 2.6963 16.3656 2.61708 16.3936 2.54427C16.4215 2.47147 16.4681 2.40777 16.5283 2.35989Z" fill="#63277D"/>
            </svg>
          </span>
          <span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.4881 0.105135L1.59971 6.6176C0.447152 7.08053 0.453819 7.72348 1.38825 8.0102L5.72418 9.36279L15.7562 3.03322C16.2306 2.7446 16.664 2.89986 16.3078 3.2161L8.1798 10.5516H8.1779L8.1798 10.5525L7.88071 15.0218C8.31887 15.0218 8.51224 14.8208 8.75799 14.5836L10.864 12.5357L15.2447 15.7714C16.0525 16.2163 16.6326 15.9876 16.8336 15.0237L19.7092 1.47107C20.0036 0.290879 19.2587 -0.243491 18.4881 0.105135Z" fill="#63277D"/>
            </svg>
          </span>
          <span>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0709 4.68248C17.0833 4.85256 17.0833 5.02166 17.0833 5.19076C17.0833 10.3659 13.2105 16.3291 6.13272 16.3291C3.95215 16.3291 1.92638 15.6867 0.22168 14.571C0.531278 14.607 0.82941 14.6196 1.15143 14.6196C2.88384 14.6239 4.56719 14.0347 5.93014 12.9471C5.12692 12.9323 4.3483 12.6628 3.70298 12.1762C3.05766 11.6895 2.57786 11.0101 2.33058 10.2327C2.56851 10.2687 2.8074 10.293 3.05775 10.293C3.40271 10.293 3.74957 10.2444 4.07159 10.1598C3.1999 9.98082 2.41608 9.50028 1.8534 8.7999C1.29072 8.09953 0.983916 7.22255 0.985165 6.31811V6.26951C1.4983 6.5601 2.0936 6.74183 2.72427 6.76613C2.19593 6.40906 1.76272 5.92453 1.46326 5.35577C1.16381 4.78701 1.00744 4.15171 1.0081 3.50655C1.0081 2.7796 1.19825 2.11291 1.53174 1.53175C2.49889 2.74172 3.70514 3.73159 5.07238 4.43725C6.43961 5.1429 7.93733 5.54861 9.46854 5.62809C9.4093 5.33654 9.37299 5.03429 9.37299 4.73108C9.37274 4.21693 9.47212 3.70778 9.66546 3.23272C9.8588 2.75766 10.1423 2.32602 10.4998 1.96246C10.8572 1.5989 11.2816 1.31057 11.7487 1.11393C12.2158 0.917292 12.7164 0.816212 13.2219 0.816468C14.3304 0.816468 15.3308 1.28879 16.0341 2.05266C16.8958 1.88319 17.7222 1.56326 18.4765 1.10705C18.1893 2.01166 17.5876 2.77873 16.7842 3.26456C17.5485 3.1759 18.2954 2.9715 19.0002 2.65812C18.4738 3.43861 17.8215 4.12303 17.0709 4.68248Z" fill="#63277D"/>
            </svg>
          </span>
        </>
    ) : (
      <>
        <span>
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7346 1.99513L16.0127 0.732172V0.455566H11.5862L8.43167 8.56935L4.84341 0.455566H0.202243V0.732172L1.69509 2.58908C1.84104 2.72631 1.9161 2.92787 1.89733 3.12943V10.4263C1.9432 10.69 1.86189 10.958 1.68258 11.1489L0 13.2566V13.529H4.76627V13.2524L3.08577 11.151C2.99573 11.057 2.92801 10.9429 2.88786 10.8175C2.84772 10.6922 2.83625 10.559 2.85434 10.4284V4.11577L7.0389 13.5332H7.5247L11.1234 4.11577V11.6184C11.1234 11.8157 11.1234 11.8565 10.9983 11.9873L9.7035 13.2802V13.5568H15.9835V13.2802L14.7346 12.0173C14.6261 11.9315 14.5699 11.7878 14.5928 11.6485V2.36393C14.582 2.29503 14.5895 2.22441 14.6144 2.1595C14.6394 2.09459 14.6809 2.03781 14.7346 1.99513Z" fill="white"/>
          </svg>
        </span>
        <span>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9468 0.0937254L0.891283 5.89941C-0.136196 6.3121 -0.130252 6.88528 0.702771 7.14087L4.56813 8.34667L13.5114 2.70403C13.9343 2.44674 14.3207 2.58515 14.0031 2.86707L6.75725 9.40642H6.75556L6.75725 9.40727L6.49062 13.3915C6.88123 13.3915 7.05361 13.2123 7.27269 13.0009L9.15018 11.1752L13.0554 14.0598C13.7755 14.4564 14.2927 14.2526 14.4718 13.3932L17.0354 1.31142C17.2978 0.259311 16.6338 -0.217066 15.9468 0.0937254Z" fill="white"/>
        </svg>
        </span>
        <span>
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2804 4.17423C15.2915 4.32585 15.2915 4.4766 15.2915 4.62735C15.2915 9.24081 11.8389 14.5569 5.52929 14.5569C3.58538 14.5569 1.77946 13.9842 0.259766 12.9896C0.535764 13.0217 0.801541 13.0329 1.08861 13.0329C2.63301 13.0367 4.13367 12.5115 5.3487 11.5419C4.63266 11.5287 3.93853 11.2885 3.36325 10.8546C2.78796 10.4208 2.36024 9.81512 2.13979 9.12211C2.3519 9.15417 2.56486 9.17583 2.78805 9.17583C3.09557 9.17583 3.40479 9.13251 3.69186 9.05713C2.91477 8.89756 2.21601 8.46917 1.7144 7.8448C1.21278 7.22043 0.939278 6.43864 0.940392 5.63235V5.58903C1.39783 5.84807 1.92853 6.01009 2.49075 6.03174C2.01976 5.71343 1.63356 5.28148 1.3666 4.77445C1.09965 4.26742 0.960251 3.70106 0.960836 3.12592C0.960836 2.47787 1.13035 1.88353 1.42765 1.36544C2.28984 2.44409 3.36518 3.32654 4.58403 3.95561C5.80288 4.58468 7.13806 4.94636 8.50309 5.01722C8.45028 4.7573 8.41791 4.48786 8.41791 4.21755C8.41768 3.7592 8.50628 3.30531 8.67864 2.88181C8.851 2.4583 9.10373 2.07351 9.4224 1.74941C9.74106 1.4253 10.1194 1.16826 10.5358 0.992963C10.9522 0.817666 11.3985 0.727556 11.8491 0.727784C12.8373 0.727784 13.7292 1.14884 14.3561 1.82982C15.1243 1.67873 15.861 1.39353 16.5335 0.98683C16.2774 1.79327 15.741 2.47709 15.0248 2.91019C15.7061 2.83116 16.372 2.64893 17.0003 2.36957C16.531 3.06535 15.9495 3.6755 15.2804 4.17423Z" fill="white"/>
        </svg>
        </span>
      </> 
    )}
  </div> 
  )
}