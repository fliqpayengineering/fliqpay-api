// grab the packages that we need for the merchant user model
import mongoose from '../util/mongo';


export interface IMerchantUser extends mongoose.Document {
    fname: string;
    lname: string;
    status: string;
    newuser: boolean;
    verifiedEmail: boolean;
    email: string;
    password: string;
    date_created: Date;
    last_login: Date,
    tags: [string],
    settings: {
      recoveryEmail: string;
      termsAccepted: string;
    },
  }

const MerchantUserSchema = new mongoose.Schema({
    fname: { type: String, required: false },
    lname: { type: String, required: false },
    status: {
      type: String,
      required: true,
      enum: ['enabled', 'disabled'],
      default: 'enabled',
    },
    newuser: { type: Boolean, required: true, default: true },
    verifiedEmail: { type: Boolean, required: true, default: false },
    email: { type: String, required: false, index: true },
    password: { type: String, required: false },
    date_created: { type: Date, default: Date.now },
    last_login: Date,
    tags: [{ type: String }],
    settings: {
      recoveryEmail: { type: String, required: false },
    },
  });

  export default mongoose.model<IMerchantUser>('MerchantUser', MerchantUserSchema);