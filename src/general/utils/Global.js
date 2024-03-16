// Global variables
const Global = {
  g_defaultPaginationLimit: 20,

  g_transactionHistoryMonth: 0,
  g_transactionHistoryYear: 0,

  g_tempChargeOtpToken: '',

  g_filterPointHistory: {
    type: null,
    fromDate: '',
    toDate: null,
  },
  g_filterVoucherGift: {
    page: 0,
    limit: 20,
    title: '',
    catId: null,
    total: 0,
  },
};

export default Global;
