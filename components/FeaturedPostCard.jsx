import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <Link href={`/post/${post.slug}`}>
    <div className="relative h-72 overflow-hidden rounded-lg shadow-md cursor-pointer">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover filter brightness-75"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-50" />
      <div className="flex flex-col justify-center items-center absolute inset-0 p-4 text-center text-white">
        <p className="mb-4 text-sm font-semibold">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <p className="mb-4 text-2xl font-semibold">{post.title}</p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.author.name}
            height={20}
            width={20}
            className="align-middle rounded-full shadow-lg"
            src={post.author.photo.url}
          />
          <p className="inline ml-2 text-white font-medium">{post.author.name}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedPostCard;
