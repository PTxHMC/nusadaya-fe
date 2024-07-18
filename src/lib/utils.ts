import { AuthService } from '@/services/auth';

export const getAssetUrl = (url: string) => `/assets${url}`;

export const tokenAccess = async (push: any, routes: string) => {
  try {
    const res = await AuthService.getAccessToken();
    return res;
  } catch (error) {
    push(routes);
  }
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  // Dapatkan bulan dalam bentuk nama singkat
  const month = monthNames[date.getMonth()];

  // Dapatkan tanggal dan tahun
  const day = date.getDate();
  const year = date.getFullYear();

  // Format tanggal sesuai dengan mm dd, yyyy
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};
