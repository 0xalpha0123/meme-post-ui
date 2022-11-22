import React from "react";

import SocialLinks from "../SocialLinks";
import DragDropZone from "../DragDropZone";
import { Input, Button } from "../../base";

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
  return (
    <div className="flex gap-6 p-6 rounded-lg transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <div className="flex flex-col max-w-[250px] w-full gap-6">
        <div className="w-full p-1 border border-bg_white_secondary dark:border-bg_dark_secondary rounded-xl">
          <img src={profile.avatar} className="w-full rounded-xl h-" />
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
          <Input placeHolder={profile.phone} className="w-1/2" label="Phone" />
        </div>
        <div className="flex gap-3 w-full">
          <Input
            placeHolder={profile.country}
            className="w-1/2"
            label="Country"
          />
          <Input
            placeHolder={profile.state_region}
            className="w-1/2"
            label="State / Region"
          />
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
        <div className="flex gap-3">
          <Button component="Update" className="py-2 text-sm" />
          <Button
            component="Delete"
            className="py-2 text-sm bg-red-600 hover:bg-red-700"
          />
          <Button
            component="Cancel"
            className="py-2 text-sm bg-gray-600 dark:bg-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
