<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",

  setup() {
    const data = reactive({
      email: "",
      password: "",
    });

    const router = useRouter();

    const submit = async () => {
      try {
        const response = await fetch(
          "https://jwt-9b670-default-rtdb.firebaseio.com/login.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log("Response data:", responseData);

        // Store cookies after successful login
        document.cookie = `token=${responseData.token}; path=/`;

        router.push("/");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return {
      data,
      submit,
    };
  },
};
</script>

json web token implementation vue 3 and google firebase real time database i have create 3 page Home.vue,
Login.vue & Register.vue i also done with router ( { path: "", component: Home },
{ path: "/login", component: Login },
{ path: "/register", component: Register } )

1) the logic is 1st Register user with name,email id and password after Register user store data in to https://jwt-9b670-default-rtdb.firebaseio.com/auth.json after Register push user to /login page


2) login logic get every user information from https://jwt-9b670-default-rtdb.firebaseio.com/auth.json this database store jwt token into localstorage  

3) home page logic after login or Register show every user name into home page 


4) don't use firebaseConfig file use only async function like <script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",

  setup() {
    const data = reactive({
      email: "",
      password: "",
    });

    const router = useRouter();

    const submit = async () => {
      try {
        const response = await fetch(
          "https://jwt-9b670-default-rtdb.firebaseio.com/login.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log("Response data:", responseData);

        // Store cookies after successful login
        document.cookie = `token=${responseData.token}; path=/`;

        router.push("/");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return {
      data,
      submit,
    };
  },
};
</script>