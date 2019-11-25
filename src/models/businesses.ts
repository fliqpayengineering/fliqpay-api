import mongoose from '../util/mongo';

export interface IBusiness extends mongoose.Document {
    name: string;
    mobile: string;
    status: string;
    admins: [{
        merchant: mongoose.Types.ObjectId;
        role: mongoose.Types.ObjectId;
    }];
    verificationDetails: {
        cacCertificate : string;
        tinNumber: string;
    };
    cryptoAddress: string; 
    acceptedCurrencies: [string];
    email: string;
    date_created: Date;
    tags: [string],
    settings: {
        conversionRateBearer: string;
        autoPayout: boolean;
        defaultPayoutAccount: mongoose.Types.ObjectId;
        recoveryEmail: string;
        termsAccepted: string;
    },
  }

const BusinessSchema = new mongoose.Schema({
    name: { type: String, required: false },
    mobile: { type: String, required: false },
    status: {
      type: String,
      required: true,
      enum: ['enabled', 'disabled'],
      default: 'enabled',
    },
    admins: [{
        merchant: { type: mongoose.Types.ObjectId, required: true },
        role: { type: mongoose.Types.ObjectId, required: true }
    }],
    verificationDetails: {
        cacCertificate: { type: mongoose.Types.ObjectId },
        tinNumber: { type: mongoose.Types.ObjectId }
    },
    cryptoAddress: { type: String, required: false },
    acceptedCurrencies: { type: [String], required: true, default: ['btc'] },
    email: { type: String, required: false, index: true },
    date_created: { type: Date, default: Date.now },
    tags: [{ type: String }],
    settings: {
      conversionRateBearer : { 
        type: String,
        required: true,
        enum: ['customer', 'business'],
        default: 'business'
      },
      autoPayout: { type: Boolean, required: true, default: true },
      defaultPayoutAccount: { type: mongoose.Types.ObjectId, ref: 'BankAccount'},
      recoveryEmail: { type: String, required: false },
      termsAccepted: { type: Boolean, default: false },
    },
  });

  export default mongoose.model<IBusiness>('Business', BusinessSchema);