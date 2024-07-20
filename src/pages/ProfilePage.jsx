import { useEffect } from 'react';
import Avatar from '../components/Avatar';
import ExperienceItem from '../features/profile/components/ExperienceItem';
import userApi from '../apis/user';
import { useState } from 'react';

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profile = await userApi.getUserProfile();
      setUserProfile(profile.data);
    };
    fetchUserProfile();
  }, []);
  // console.log(userProfile);
  // console.log(userProfile?.Experience);

  const education = userProfile?.Experience.filter(
    (exp) => exp.title === 'EDUCATION'
  );
  const work = userProfile?.Experience.filter((exp) => exp.title === 'WORK');
  console.log('edu', education);
  console.log('work', work);
  return (
    <div className="flex justify-center py-10">
      <div className="w-[1300px] h-screen flex flex-col gap-24 bg-white p-10 rounded-md shadow">
        <div className="flex gap-10 items-center">
          <Avatar size="5" />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold ">
              {userProfile?.firstName} {userProfile?.lastName}
            </p>
            <p>{userProfile?.jobTitle}</p>
            <p className="text-sm text-gray-400">
              {userProfile?.province}, {userProfile?.city}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h1 className=" text-lg font-semibold">Education :</h1>
            {education?.map((item) => {
              console.log(item);
              return (
                <div key={item.id} className="my-4">
                  <ExperienceItem item={item} />
                </div>
              );
            })}
          </div>

          <div>
            <h1 className=" text-lg font-semibold">Work experiences :</h1>
            {work?.map((item) => (
              <div key={item.id} className="my-4">
                <ExperienceItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
