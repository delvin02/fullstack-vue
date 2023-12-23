<template>
  <div class="container px-8 mx-auto">
    <div class="gap-12 grid-cols-2 grid relative mb-3">
      <div class="bg-gray-200 p-2 self-start rounded-xl transition-transform duration-300 sm:rounded-2xl">
        <form method="POST" action="/api/pardot" class="gap-xl grid">
          <section class="w-full">
            <div class="p-2" style="min-height: auto;">
              <div class="p-4">
                <h1 class="text-6xl font-bold tracking-tight leading-none">Request a demo</h1>
              </div>
              <div class="p-4">
                <fieldset class="text-lg leading-7 grid gap-x-5 rtl:text-right -mb-xl">
                  <div class="col-span-1 mb-5 items-center">
                    <div class="border-2 border-gray-400 rounded-2xl">
                      <input type="text"
                        name="firstName" placeholder="First name" required=""
                        class="px-3 text-gray-700 focus:outline focus:outline-offset-2 focus:outline-2 focus:bg-gray-200 rounded-2xl text-start py-3 bg-transparent w-full transition hover:bg-gray-300"  data-testid="csds-text-input"
                        value="">
                    </div>
                </div>
                <div class="col-span-1 mb-5 items-center">
                    <div class="border-2 border-gray-400 rounded-2xl">
                      <input type="text"
                        name="firstName" placeholder="First name" required=""
                        class="px-3 text-gray-700 text-start py-3 bg-transparent w-full"  data-testid="csds-text-input"
                        value="">
                    </div>
                </div>
                <div class="col-span-2 mb-xl">
                  <div class="sc-dSIIpw llGsWF">
                    <div class=" react-tel-input ">
                      <div class="special-label">Phone</div><input class="form-control sc-dcJsrY"
                        placeholder="Phone number" type="tel" data-testid="csds-phone-input" name="phone" required=""
                        width="full" icon="[object Object]" pattern=".{10,}" value="">
                      <div class="flag-dropdown sc-gEvEer">
                        <div class="selected-flag" title="United States: + 1" tabindex="0" role="button"
                          aria-haspopup="listbox">
                          <div class="flag us">
                            <div class="arrow"></div>
                          </div>
                        </div>
                      </div>
                      <div class="sc-fqkvVR"></div>
                    </div>
                  </div>
                </div>
                <div class="col-span-2 mb-xl">
                  <div data-testid="csds-base-input-container" class="sc-iGgWBj cZLZXl"><input
                      class="sc-dcJsrY dwHOrx rtl:text-right rtl:!pl-2 rtl:!pr-3" name="email" placeholder="Email"
                      required="" width="full" type="email" data-testid="csds-base-input" value="">
                    <div aria-hidden="true" class="sc-fqkvVR gQycbC"></div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="gap-sm flex place-content-end"><button type="submit"
              class="sc-dLMFU gqoonO !h4 [&amp;_*]:!p-0 py-3 px-5 whitespace-nowrap sm-down:flex-grow font-InterDisplay"
              data-testid="csds-button">
              <div class="sc-jEACwC jJIwvC">Submit</div>
            </button></div>
        </section><input type="hidden" name="Country" value="United States"><input type="hidden" name="Country__c"
          value="United States">
        <div class="text-small blue-links [&amp;_a]:underline">
          <p>Submitting this form means you've agreed to our <a target="_blank" href="/legal/otter-website"
              rel="noreferrer" class="Link__BaseLink-sc-1xgbn1v-0 kThbCJ">Terms of Service</a> and <a target="_blank"
              href="/legal/privacy-policy" rel="noreferrer" class="Link__BaseLink-sc-1xgbn1v-0 kThbCJ">Privacy
              Policy</a>.</p>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</div></template>

<script>
export default {
  name: "Demo"
}
</script>