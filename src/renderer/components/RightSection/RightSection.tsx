import React from 'react';
import ServerPreview from './ServerPreview/ServerPreview';
import { Badge, Button, IconButton } from '@radix-ui/themes';
import BootServerButton from './BootServer/BootServerButton';
import ServerRunningBadge from './ServerRunningBadge/ServerRunningBadge';
import RightSectionButton from './ui/RightSectionButton/RightSectionButton';
import useTranslation from '../../hooks/translation/useTranslation';
import { useHistory } from 'react-router-dom';
import { MdAnnouncement } from 'react-icons/md';
import useSelectedServerInstance from '../../redux/selectedServerInstance/useSelectedServerInstance';
import useServerInfo from '../../hooks/server/info/useServerInfo';

export default function RightSection() {
  const { t } = useTranslation();
  const history = useHistory();

  const { selectedServerInstance } = useSelectedServerInstance();
  const { serverInfo } = useServerInfo(selectedServerInstance);

  return (
    <div className="w-[400px] h-full p-4 bg-bg2 flex flex-col gap-4 relative">
      <ServerPreview />
      <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-4">
        <ServerRunningBadge />
        <RightSectionButton
          onClick={() => {
            history.push('/server-management');
          }}
        >
          {t('ServerManagement')}
        </RightSectionButton>
        <RightSectionButton
          onClick={() => {
            history.push('/world-settings');
          }}
        >
          {t('WorldSettings')}
        </RightSectionButton>
        {serverInfo?.modManagementEnabled && (
          <RightSectionButton
            onClick={() => {
              history.push('/mod-management');
            }}
          >
            {t('ModManagement')}
          </RightSectionButton>
        )}
        <BootServerButton />
      </div>
    </div>
  );
}
