import { z } from '@builder.io/qwik-city';

const emailSchema = z.object({
    email: z.string().min(1, 'Please enter your email').email(),
});
const authenticationCodeSchema = z.object({
    code: z.string().min(8, 'Code must be 8 digits long'),
});

type EmailForm = z.infer<typeof emailSchema>;
type AuthenticationCodeForm = z.infer<typeof authenticationCodeSchema>;

export {
    emailSchema,
    authenticationCodeSchema,
    type EmailForm,
    type AuthenticationCodeForm,
};
