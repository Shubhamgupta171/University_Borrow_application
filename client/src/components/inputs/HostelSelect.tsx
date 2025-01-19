// import Select from 'react-select'

// import useCountries from '../../hooks/useCountries';

// export type CountrySelectValue = {
//   flag: string;
//   label: string;
//   region: string;
//   value: string
// }

// interface CountrySelectProps {
//   value?: CountrySelectValue;
//   onChange: (value: CountrySelectValue) => void;
// }

// const CountrySelect: React.FC<CountrySelectProps> = ({
//   value,
//   onChange
// }) => {
//   const { getAll } = useCountries();

//   return ( 
//     <div>
//       <Select
//         placeholder="Anywhere"
//         isClearable
//         options={getAll()}
//         value={value}
//         onChange={(value) => onChange(value as CountrySelectValue)}
//         formatOptionLabel={(option: any) => (
//           <div className="
//           flex flex-row items-center gap-3">
//             <div>{option.flag}</div>
//             <div>
//               {option.label},
//               <span className="text-neutral-500 ml-1">
//                 {option.region}
//               </span>
//             </div>
//           </div>
//         )}
//         classNames={{
//           control: () => 'p-3 border-2',
//           input: () => 'text-lg',
//           option: () => 'text-lg'
//         }}
//         theme={(theme) => ({
//           ...theme,
//           borderRadius: 6,
//           colors: {
//             ...theme.colors,
//             primary: 'black',
//             primary25: '#ffe4e6'
//           }
//         })}
//       />
//     </div>
//    );
// }
 
// export default CountrySelect;


import Select from 'react-select';

export type HostelSelectValue = {
  label: string;
  value: string;
};

interface HostelSelectProps {
  value?: HostelSelectValue;
  onChange: (value: HostelSelectValue) => void;
}

const HostelSelect: React.FC<HostelSelectProps> = ({
  value,
  onChange,
}) => {
  // Static list of hostels
  const hostels = [
    { value: 'kmh', label: 'KMH Hostel' },
    { value: 'patkai', label: 'Patkai Hostel' },
    { value: 'cv_raman', label: 'CV Raman Hostel' },
    { value: 'jwh', label: 'JWH Hostel' },
    { value: 'swh', label: 'SWH Hostel' },
    { value: 'kwh', label: 'KWH Hostel' },
    { value: 'cmh', label: 'CMH Hostel' },
  ];

  return (
    <div>
      <Select
        placeholder="Select your hostel"
        isClearable
        options={hostels}
        value={value}
        onChange={(value) => onChange(value as HostelSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.label}</div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6',
          },
        })}
      />
    </div>
  );
};

export default HostelSelect;

