import mongoose from '../util/mongo';

export interface IBank extends mongoose.Document {
    business: mongoose.Types.ObjectId;
    nubanAccountNumber: string;
    bankCode: string;
    bankName: string;
    accountName: string;
    settings: {
      default: boolean;
    },
  }

const BankSchema = new mongoose.Schema({
    business: { type: mongoose.Types.ObjectId, ref: 'Business'},
    nubanAccountNumber: { type: String, required: true },
    bankCode: { type: String, required: true },
    bankName: { type: String, required: true },
    accountName: { type: String, required: true },
    settings: {
      default: { type: Boolean, required: true, default: false },
    },
  });

  export default mongoose.model<IBank>('BankAccount', BankSchema);