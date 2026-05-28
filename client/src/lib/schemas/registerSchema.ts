import { z } from "zod"

const passwordValidation = new RegExp(
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
)

export const registerSchema = z.object({
    nickName: z.string().min(1, "**Nickname cannot be empty"),
    email: z.string().email(),
    password: z.string().regex(passwordValidation, {
        message: '**Password must contain 1 alpha, 1 number, 1 special and be 6-10 characters'
    }),
    confirmPassword: z.string().min(1, "**Cannot be empty"),
    gender: z.string().min(1, "**Gender cannot be empty"),
    year: z.string().min(1, "**Year Required"),
    month: z.string().min(1, "**Month Required"),
    day: z.string().min(1, "**Day Required"),

    userAgreement: z.literal(true,"**You must agree to the terms"),
    privacyPolicy: z.literal(true, "**You must agree to the privacy policy")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    })

export type RegisterSchema = z.infer<typeof registerSchema>;