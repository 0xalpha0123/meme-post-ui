import React, { useState } from "react";

import SocialLinks from "../SocialLinks";
import DragDropZone from "../DragDropZone";
import { Input, Button, RadioGroup, Select, Typography } from "../../base";

import {
  formattedCountryList,
  formattedStateList,
} from "../../../helpers/utils";

const profile = {
  avatar: "https://i.postimg.cc/HnyBQYs2/Rectangle-6321.png",
  full_name: "Steven John",
  gender: "male",
  birthday: "18 September 1985",
  company_name: "AliThemes",
  email: "stevenjohn@gmail.com",
  phone: "+889534521253",
  country: "US",
  state_region: "Chicago",
  address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
  zip_code: "1253",
  socials_link: {
    facebook: "fb.com/steven-john",
    instagram: "pin.com/steven-john",
    twitter: "tw.com/steven-john",
    linked_in: "in.com/steven-john",
  },
  bio: "Sit sapien sit dui vulputate volutpat velit quis pellentesque malesuada placerat ornare gravida pellentesque proin scelerisque turpis integer massa, in metus nisl commodo, egestas nam tellus id interdum augue arcu",
};

const ProfilePanel = () => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  const handleCountryChange = (value: any) => {
    setCountry(value);
  };

  const handleStateChange = (value: any) => {
    setState(value);
  };

  return (
    <div className="flex flex-col rounded transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <img
        src="https://i.postimg.cc/90g0YGmw/Rectangle-6321.png"
        className="w-full h-80 object-cover rounded-t"
      />
      <div className="flex gap-6 p-6">
        <div className="flex flex-col max-w-[250px] w-full gap-6 -mt-40">
          <div className="w-full p-1 border border-bg_white_secondary dark:border-bg_dark_secondary rounded-xl bg-white dark:bg-bg_dark">
            <img src={profile.avatar} className="w-full rounded-xl" />
          </div>
          <DragDropZone height="h-32" />
        </div>
        <div className="flex flex-col w-full gap-8">
          <div className="flex gap-3 w-full">
            <Input
              placeHolder={profile.full_name}
              className="w-1/2"
              label="Full Name"
            />
            <RadioGroup
              options={["Male", "Female", "Other"]}
              className="w-1/2"
              label="Gender"
            />
          </div>
          <div className="flex gap-3 w-full">
            <Input
              placeHolder={profile.birthday}
              className="w-1/2"
              label="Birthday"
            />
            <Input
              placeHolder={profile.company_name}
              className="w-1/2"
              label="Company name"
            />
          </div>
          <div className="flex gap-3 w-full">
            <Input
              placeHolder={profile.email}
              className="w-1/2"
              label="Email address"
            />
            <Input
              placeHolder={profile.phone}
              className="w-1/2"
              label="Phone"
            />
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-1/2 flex flex-col justify-start">
              <Typography
                text="Country"
                textColor="text-primary_white-700 dark:text-primary_dark-700"
                className="text-sm font-medium mb-2"
              />
              <Select
                value={country}
                onChange={handleCountryChange}
                options={formattedCountryList()}
              />
            </div>
            <div className="w-1/2 flex flex-col justify-start">
              <Typography
                text="State / Region"
                textColor="text-primary_white-700 dark:text-primary_dark-700"
                className="text-sm font-medium mb-2"
              />
              <Select
                value={state}
                onChange={handleStateChange}
                options={formattedStateList(country)}
              />
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <Input
              placeHolder={profile.address}
              className="w-1/2"
              label="Address"
            />
            <Input
              placeHolder={profile.zip_code}
              className="w-1/2"
              label="Zip Code"
            />
          </div>
          <SocialLinks socials={profile.socials_link} />
          <div className="flex gap-3 justify-end">
            <Button size="md" color="green">
              Update
            </Button>
            <Button size="md" color="red">
              Delete
            </Button>
            <Button size="md" color="gray">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
