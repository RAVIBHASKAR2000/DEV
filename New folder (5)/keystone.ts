import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

import { permissionsList } from './schemas/fields';

import {lists} from './schemas/schema';
import 'dotenv/config';

import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';

const User = lists.User;
const Meeting = lists.Meeting;
const EventType = lists.EventType;
const Credential = lists.Credential;
const Team = lists.Team;
const Membership = lists.Membership;
const verificationRequest = lists.verificationRequest;
const BookingRef = lists.BookingRef;
const Attendee = lists.Attendee;
const Booking = lists.Booking;
const Availability = lists.Availability;
const ResetPasswordRequest = lists.ResetPasswordRequest;
const RemainderMail = lists.RemainderMail;
const EventTypeCustomInput = lists.EventTypeCustomInput;


function check(name: string) {}

const databaseURL =
  process.env.DATABASE_URL || 'postgres://xznfducmjgqvta:e63f8c3b1b327e6daed0eb684a9d5fdc51ecb3047b8a466268a53759c691d5c5@ec2-3-217-68-126.compute-1.amazonaws.com:5432/d9mqlmm11584rf';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'prisma_postgresql',
      url: databaseURL,
      
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Meeting,
      EventType,
      Credential,
      Team,
      Membership,
      verificationRequest,
      BookingRef,
      Attendee,
      Booking,
      Availability,
      ResetPasswordRequest,
      RemainderMail,
      EventTypeCustomInput,
    }),
    
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
);
