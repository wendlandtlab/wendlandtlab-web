<template>
  <div
    class="
      flex
      justify-evenly
      w-full
      h-screen
      mx-auto
      mt-2
      h-26
      bg-gray-300
      items-center
      position-fixed
      -bottom-full
    "
  >
    <div flex flex-col>
      <a href="https://www.mit.edu">
        <img
          class="h-10 w-auto sm:h-12"
          href="https://www.mit.edu/"
          src="../assets/mit-logo.svg?url"
          alt="MIT Logo"
        />
      </a>
      <a href="https://www.mit.edu/accessibility/" class="text-red-800"
        >Accessibility</a
      >
    </div>
    <div flex flex-col>
      <a href="https://chemistry.mit.edu/"
        ><img
          class="h-10 w-auto sm:h-12"
          src="../assets/mit-chemistry-logo.svg?url"
          alt="MIT Chem Logo"
        />
        <p class="text-red-800">MIT Chemistry Dept.</p>
      </a>
    </div>
  </div>
</template>