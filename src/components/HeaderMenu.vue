<template>
  <Popover class="relative bg-white">
    <div class="w-full mx-auto px-14 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-6
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              class="h-10 w-auto sm:h-12"
              src="../assets/wendlandtlablogo.svg?url"
              alt=""
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link
            to="/research"
            class="
              text-xl
              font-medium
              text-gray-500
              hover:font-bold hover:text-gray-900
            "
          >
            Research
          </router-link>
          <router-link
            to="/people"
            class="
              text-xl
              font-medium
              text-gray-500
              hover:font-bold hover:text-gray-900
            "
          >
            People
          </router-link>
          <router-link
            to="/publications"
            class="
              text-xl
              font-medium
              text-gray-500
              hover:font-bold hover:text-gray-900
            "
          >
            Publications
          </router-link>
                    <router-link
            to="/labtour"
            class="
              text-xl
              font-medium
              text-gray-500
              hover:font-bold hover:text-gray-900
            "
          >
            Lab space
          </router-link>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-10 w-auto"
                  src="../assets/wendlandtlablogo.svg?url"
                  alt="Wendlandt lab"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link
                to="/research"
                class="text-base font-bold text-gray-900 hover:text-gray-700"
              >
                Research
              </router-link>
              <router-link
                to="/people"
                class="text-base font-bold text-gray-900 hover:text-gray-700"
              >
                People
              </router-link>
              <router-link
                to="/publications"
                class="text-base font-bold text-gray-900 hover:text-gray-700"
              >
                Publications
              </router-link>
                            <router-link
                to="/labtour"
                class="text-base font-bold text-gray-900 hover:text-gray-700"
              >
                Lab Space
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {};
  },
};
</script>