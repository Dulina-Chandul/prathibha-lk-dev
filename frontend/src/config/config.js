// config.js
export const signUpFormControll = [
  {
    inline: true,
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "First name",
        required: true,
        className: "h-12",
        componentType: "Input",
        props: {
          maxLength: 50,
        },
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Last name",
        required: true,
        className: "h-12",
        componentType: "Input",
        props: {
          maxLength: 50,
        },
      },
    ],
  },
  {
    name: "userName",
    label: "User Name",
    type: "text",
    placeholder: "Enter your user name",
    required: true,
    className: "h-12",
    componentType: "Input",
  },
  {
    name: "userEmail",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    className: "h-12",
    componentType: "Input",
    props: {
      autoComplete: "email",
    },
  },
  {
    inline: true,
    fields: [
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Create a password",
        required: true,
        className: "h-12",
        componentType: "Input",
        props: {
          minLength: 8,
          autoComplete: "new-password",
        },
      },
      {
        name: "confirm-password",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        required: true,
        className: "h-12",
        componentType: "Input",
        props: {
          minLength: 8,
          autoComplete: "new-password",
        },
      },
    ],
  },
  //   {
  //     name: "userType",
  //     label: "User Type",
  //     placeholder: "Select user type",
  //     required: true,
  //     className: "h-12",
  //     componentType: "Select",
  //     props: {
  //       options: [
  //         { value: "student", label: "Student" },
  //         { value: "teacher", label: "Teacher" },
  //         { value: "admin", label: "Administrator" },
  //       ],
  //     },
  //   },
];

export const signInFormControll = [
  {
    name: "userEmail",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    className: "h-12",
    componentType: "Input",
    props: {
      autoComplete: "email",
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    className: "h-12",
    componentType: "Input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  firstName: "",
  lastName: "",
  userName: "",
  userEmail: "",
  password: "",
  confirmPassword: "",
};

// Instructor
// Initial Course Data
export const initialCourseData = [
  {
    id: undefined,
    title: undefined,
    description: undefined,
    image: undefined,
    videoCount: 0,
    videos: [],
    courseStatus: undefined,
  },
];
