export const transactionSchema = {
  name: 'transactions',
  title: 'Transactions',
  type: 'document',
  fields: [
    {
      name: 'txHash',
      title: 'Transaction Hash',
      type: 'string',
    },
    {
      name: 'fromAddress',
      title: 'From (Wallet Address)',
      type: 'string',
    },
    {
      name: 'toAddress',
      title: 'To (Wallet Address)',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
}
