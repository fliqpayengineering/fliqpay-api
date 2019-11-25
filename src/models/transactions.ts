import mongoose from '../util/mongo';

export interface ITransaction extends mongoose.Document {
    business: mongoose.Types.ObjectId;
    status: string;
    type: string;
    cryptoAddress: string; 
    cryptoCurrency: string;
    amount: number;
    date_created: Date;
    date_completed: Date;
  }

const TransactionSchema = new mongoose.Schema({
    business: { type: mongoose.Types.ObjectId, required: true, ref: 'Business' },
    type: { 
      type: String,
      required: true,
      enum: ['checkout', 'url', 'payout'],
    },
    status: {
      type: String,
      required: true,
      enum: ['complete', 'pending'],
      default: 'pending',
    },
    cryptoAddress: { type: String, required: false },
    cryptoCurrency: { type: String, required: false },
    amount: { type: Number, required: true },
    date_created: { type: Date, default: Date.now },
    date_completed: { type: Date },
  });

  export default mongoose.model<ITransaction>('Transaction', TransactionSchema);