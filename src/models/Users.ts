import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  location: string;
  pno: string;
  email: string;
  password: string;
  dateCreated: Date;
}

const UserSchema: Schema<UserDocument> = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
