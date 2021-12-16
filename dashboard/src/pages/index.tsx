import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <div className="container flex m-auto justify-center justify-evenly">
      <Link href="/daily-approvals">
        <span className="hover:underline cursor-pointer">
          Daily Approvals Chart
        </span>
      </Link>
      <Link href="/accounts">
        <span className="hover:underline cursor-pointera">
          Accounts of Interest
        </span>
      </Link>
      <Link href="/users">
        <span className="hover:underline cursor-pointera">
          Users Information
        </span>
      </Link>
    </div>
  );
}
