// hooks/useHostels.ts

const useHostels = () => {
  // Define the hostel list
  const hostels = [
    { value: 'kmh', label: 'KMH Hostel', region: 'North Campus' },
    { value: 'patkai', label: 'Patkai Hostel', region: 'North Campus' },
    { value: 'cv_raman', label: 'CV Raman Hostel', region: 'South Campus' },
    { value: 'jwh', label: 'JWH Hostel', region: 'South Campus' },
    { value: 'swh', label: 'SWH Hostel', region: 'Central Campus' },
    { value: 'kwh', label: 'KWH Hostel', region: 'East Campus' },
    { value: 'cmh', label: 'CMH Hostel', region: 'West Campus' },
    { value: 'nmh', label: 'NMH Hostel', region: 'West Campus' },
  ];

  const getAll = () => hostels;

  const getByValue = (value: string) =>
    hostels.find((hostel) => hostel.value === value);

  return { getAll, getByValue };
};

export default useHostels;
