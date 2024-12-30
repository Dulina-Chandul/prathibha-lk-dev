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
        name: "confirmPassword",
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
    courseLanding: {
      image: undefined,
      title: undefined,
      description: undefined,
    },
    createdAt: "Created Data goes here",
    curriculum: [],
    instructorId: undefined,
    settings: {
      access: "free",
      visibility: "public",
    },
    updateAt: "Updated Data goes here",
    _id: undefined,
  },
];
