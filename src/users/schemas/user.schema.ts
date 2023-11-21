import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    seller: {
      type: Boolean,
      default: false,
    },
    address: {
      addr1: String,
      addr2: String,
      city: String,
      state: String,
      country: String,
      zip: Number,
    },
    created: { type: Date, default: Date.now },
  },

  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next: (err?: Error) => void) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

export default UserSchema;
