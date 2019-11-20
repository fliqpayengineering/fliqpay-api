// grab the packages that we need for the user model
import mongoose, {Schema, Document } from 'mongoose';


export interface IMerchantUser extends Document {
    fname: string;
    lname: string;
    status: string;
    newuser: boolean;
    verifiedEmail: boolean;
    email: string;
    password: string;
    hasSetPassword: boolean;
    date_created: Date;
    last_login: Date,
    tags: [string],
    settings: {
      recoveryEmail: string;
      termsAccepted: string;
      notificationsEnabled: string;
    },
  }

const MerchantUserSchema = new Schema({
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
    hasSetPassword: { type: Boolean, required: true, default: false },
    date_created: { type: Date, default: Date.now },
    last_login: Date,
    tags: [{ type: String }],
    settings: {
      recoveryEmail: { type: String, required: false },
      termsAccepted: { type: Boolean, default: false },
      notificationsEnabled: { type: Boolean, default: true },
    },
  });

  export default mongoose.model<IMerchantUser>('MerchantUser', MerchantUserSchema);