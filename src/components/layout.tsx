import { ReactNode, VFC } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";

type Props = {
  title: string;
  children: ReactNode;
  isHome?: boolean;
};

const Layout: VFC<Props> = ({ title, children, isHome }) => {
  return (
    <div className="w-full min-h-screen bg-gray-300 font-noto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        {/* // 共通のメタデータなどはここに記載 */}
      </Head>
      {/* // 共通のヘッダー */}
      <main className="container pt-8 mx-auto max-w-xl">
        {/* // ここにコンテンツが埋め込まれる */}
        {children}
      </main>
      {/* // 共通のフッター */}
      {isHome ? null : (
        <p className="mt-10 text-center">
          <Link href="/">
            <a className="text-xl underline">Home</a>
          </Link>
        </p>
      )}
    </div>
  );
};
export default Layout;
